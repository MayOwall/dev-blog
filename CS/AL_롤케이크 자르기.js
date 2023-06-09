<div class="markdown-body">
  <h2>문제 유형</h2>
  <h3>출처</h3>
  <p>프로그래머스</p>
  <h3>레벨</h3>
  <p>Lv. 2</p>
  <h2>문제 설명</h2>
  <p>
    철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다.
    이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다. 철수와 동생은
    롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크
    위에 올려진 토핑들의 종류에 더 관심이 많습니다. 그래서 잘린 조각들의 크기와
    올려진 토핑의 개수에 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면
    공평하게 롤케이크가 나누어진 것으로 생각합니다.
    <br />
    예를 들어, 롤케이크에 4가지 종류의 토핑이 올려져 있다고 합시다. 토핑들을 1,
    2, 3, 4와 같이 번호로 표시했을 때, 케이크 위에 토핑들이 [1, 2, 1, 3, 1, 4,
    1, 2] 순서로 올려져 있습니다. 만약 세 번째 토핑(1)과 네 번째 토핑(3) 사이를
    자르면 롤케이크의 토핑은 [1, 2, 1], [3, 1, 4, 1, 2]로 나뉘게 됩니다. 철수가
    [1, 2, 1]이 놓인 조각을, 동생이 [3, 1, 4, 1, 2]가 놓인 조각을 먹게 되면
    철수는 두 가지 토핑(1, 2)을 맛볼 수 있지만, 동생은 네 가지 토핑(1, 2, 3,
    4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것이 아닙니다. 만약 롤케이크의
    네 번째 토핑(3)과 다섯 번째 토핑(1) 사이를 자르면 [1, 2, 1, 3], [1, 4, 1,
    2]로 나뉘게 됩니다. 이 경우 철수는 세 가지 토핑(1, 2, 3)을, 동생도 세 가지
    토핑(1, 2, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것입니다. 공평하게
    롤케이크를 자르는 방법은 여러가지 일 수 있습니다. 위의 롤케이크를 [1, 2, 1,
    3, 1], [4, 1, 2]으로 잘라도 공평하게 나뉩니다. 어떤 경우에는 롤케이크를
    공평하게 나누지 못할 수도 있습니다.
    <br />
    롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 <code>topping</code>이
    매개변수로 주어질 때, 롤케이크를 공평하게 자르는 방법의 수를 return 하도록
    solution 함수를 완성해주세요.
  </p>
  <h3>제한 사항</h3>
  <ul>
    <li>
      1 &le; topping의 길이 &le; 1,000,000
      <ul>
        <li>1 &le; topping의 원소 &le; 10,000</li>
      </ul>
    </li>
  </ul>
  <h2>문제 풀이</h2>
  <h3>풀이 설명</h3>
  <p>
    이 문제는 제한 사항을 가장 먼저 봐야 합니다. topping의 길이가 최대
    100만이므로, 오직 단 한번의 순회(시간 복잡도 : <code>O(n)</code>)만으로
    문제를 풀 수 있어야 합니다. 따라서 topping을 순회하면서 매 순회마다 new
    Set...을 통해 철수와 동생의 토핑 개수를 각각 구하는 풀이는 시간 초과가
    걸리게 됩니다. 그렇다면 어떻게 해야 시간 초과를 걸리지 않을 수 있을까요?
    <br />
    정답은 topping 개수에 대한 순회를 바깥에서 해 주면 된다는 것입니다. 각 토핑
    종류 별의 개수를 한번 순회에서 알아둔 후, 그 다음 다시 한번 더 topping을
    순회하며 이미 방문한 토핑인지, 마지막 토핑인지에 따라 철수와 동생의 토핑
    종류 개수를 조절 해 주면 됩니다.
  </p>
  <h3>풀이 코드</h3>
  <pre >
    <code class="javascript">const solution = (topping) =&gt;{
    const toppings = {};
    // 토핑 종류별 개수 구하기
    topping.forEach(v =&gt; {
        if(!toppings[v]) {
            toppings[v] = {
                isVisit : false,
                count : 0
            }
        };
        toppings[v].count += 1;
    });
    
    let left = 0;
    let right = Object.keys(toppings).length;
    let answer = 0;
    
    // topping 순회
    topping.forEach(v =&gt; {
        const cur = toppings[v];
        cur.count -= 1;
        // 처음 방문하는 토핑이라면 left(철수)의 토핑개수 1개 더해주기
        if(!cur.isVisit) {
            cur.isVisit = true;
            left += 1;
        };
        // 마지막 토핑이라면 right(동생)의 토핑개수 1개 빼주기
        if(!cur.count) right -= 1;
        // left(철수)와 right(동생)의 토핑개수가 같다면 정답 1 더해주기
        if(left === right) answer += 1;
    });
    
    return answer;
} </code>
  </pre>
</div>
