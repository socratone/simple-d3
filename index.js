const height = 250;

const svg = d3.select('svg'); // DOM.svg로 svg를 새로 만들어 d3에 element지정
const ArrayofData = [
  50, 90, 120, 250, 200, 150, 100, 50, 10, 40, 80, 60, 40, 70, 50, 90, 120, 60,
  40, 70, 50, 60, 40, 70,
];
svg
  .selectAll('rect') // 모든 DOM <rect/> element를 선택
  .data(ArrayofData) // DOM <rect/> element에 ArrayofData 연결 (1대1)
  .enter() // 아직 DOM 요소에 바인딩되지 않은 데이터 부분을 반환합니다.
  .append('rect') // 각 데이터 값에 대한 선택된 svg에 <rect/>를 추가
  .attr('x', (d, idx) => idx * 20) // 각 x 속성(위치) 지정
  .attr('y', (d) => height - d) // y 속성 지정 (250 - 데이터 값) -> svg 상단 지점이 0
  .attr('width', 15) // 가로 속성 각 15로 지정
  .attr('height', (d) => d) // 세로 속성은 그대로 반환
  .attr('fill', 'purple');

document.body.append(svg.node());