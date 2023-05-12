<div class="markdown-body">
  <aside class="goal">🚀 <b>목표</b> : PORT와 DNS에 대해 알아보아요</aside>

  <h1>PORT</h1>

  <aside>
    🤔 동일 IP에서 두 개 이상의 네트워크 통신이 발생할때, 서로 다른 통신의
    패킷을 어떻게 구분할 수 있을까요?
  </aside>

  <h2>PORT란?</h2>

  <h3>PORT의 사전적 정의</h3>
  <blockquote>
    <b>port [ pɔːrt ]</b>
    <ol>
      <li>항구</li>
      <li>복사하다</li>
      <li>포트와인</li>
    </ol>
    <p>출처 : 네이버 영어사전</p>
  </blockquote>

  <h3>PORT의 역할</h3>
  <p>
    <strong>PORT는 네트워크 서비스나 특정 프로세스를 식별하는 논리 단위</strong>
    입니다. 동일 IP에서 두 프로세스(애플리케이션) 이상의 네트워크 통신이 발생할
    때, 각각의 네트워크 통신은 일종의 번호가 부여합니다. 이렇게 부여된 번호
    덕분에, 같은 IP내에서 발생한 두개 이상의 네트워크 통신에서 프로세스를
    구분하는 것이 가능해 집니다. 즉 IP가 하나의 거대한 아파트라면, PORT는 아파트
    내의 동 / 호수의 역할을 하는 것이지요.
  </p>

  <h3>PORT 번호</h3>
  <p>
    포트는 번호를 통해 구분이 됩니다. 이를 <strong>PORT 번호</strong>라고
    합니다. PORT 번호는 0부터 65535(2^16)까지 할당이 가능하지만, 0 ~ 1023은
    <u>*잘 알려진 포트</u>임으로 개인적으로는 사용하지 않는 것이 좋습니다. PORT
    번호의 대표적인 사례로는 `80(HTTP)`, `443(HTTPS)` 등이 있습니다. 이렇게
    부여된 PORT 번호들은 TCP의 패킷 내부에 포함되어 서버로 전송됩니다.
  </p>
  <blockquote>
    <a
      href="https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D"
      >잘 알려진 포트</a
    >(well-knwon-port) : 특정한 쓰임새를 위하여 `IANA`에서 할당한 PORT
    번호입니다. 강제성은 없지만, IANA의 권고이기에 전반적인 OS에서 같은 목적으로
    통일되어 사용됩니다.
  </blockquote>

  <h4>출처</h4>
  <p>
    포트 (<a
      href="https://ko.wikipedia.org/wiki/%ED%8F%AC%ED%8A%B8_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9)"
      >위키백과</a
    >)
  </p>
  <p>
    TCP/UDP의 포트 목록 (<a
      href="https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D"
      >위키백과</a
    >)
  </p>

  <h1>DNS (Domain Name System)</h1>
  <aside>
    🤔 숫자로 된 IP는 사람이 기억하기 어렵다는 문제가 있습니다. 이 문제를 어떤
    방식으로 해결할 수 있을까요?
  </aside>

  <h2>DNS 란</h2>
  <p>
    DNS는 Domain Name System의 약어로,
    <strong>
      호스트의 도메인 이름을 호스트의 네트워크 주소로 바꾸거나, 그 반대로
      변환하는 역할
    </strong>
    을 수행하는 시스템입니다. IP가 기억하기 어렵고, 변경될 수 있다는 등의 문제를
    극복하기 위해 생겨났습니다. DNS는 사람이 읽기 쉬운 문자로 된 도메인 명을 IP
    주소(000.000.000.0 등)로 변환해 주는 역할을 합니다. 이같은 시스템을 통해
    우리가 google.com이라는 간단한 몇글자의 알파벳만으로도 000.000.000.000등의
    복잡한 숫자로 이루어진 주소로 쉽게 접근할 수 있게 되는 것이지요. 즉 DNS는
    일종의 전화변호부 역할을 합니다.
  </p>
  <p>
    누군가 도메인명을 구매하여 IP 등록을 한다면, `DNS 서버`에서 해당 도메인으로
    접속하는 사람들에게 기존에 구매되어 할당된 IP 주소를 공급합니다.
  </p>

  <h3>DNS 이름 형성</h3>
  <p>DNS 이름 형성에 관한 규칙은`RFC`에 정의되어 있습니다.</p>
  <p>
    도메인은 한 개 이상의 `레이블`로 이루어지고, 이를 점으로 구분하여 붙여
    씁니다. `Ex) google.com` 각 레이블은 최대 63개의 문자를 사용할 수 있으며,
    전체 도메인 이름은 253개 문자를 초과할 수 없습니다.
  </p>

  <h3>DNS 서버</h3>
  <p>
    DNS는 DNS 역할을 담당하는 서버를 의미합니다. DNS 서버는 일반적으로 인터넷
    서비스 제공업체가 관리합니다. 클라이언트가 DNS 서버에 도메인네임으로 ip
    주소를 요청하면, 해당 통신사의 DNS 서버는 요청한 도메인 네임에 해당하는 IP
    주소를 클라이언트 PC에게 제공합니다.
  </p>

  <h4>출처</h4>
  <p>
    DNS (<a href="https://ko.wikipedia.org/wiki/DNS">위키백과</a>)<br />DNS서버
    확인 및 변경하기 (<a href="https://m.blog.naver.com/kangyh5/221701387941"
      >수리수리 잡스</a
    >)
  </p>
</div>
