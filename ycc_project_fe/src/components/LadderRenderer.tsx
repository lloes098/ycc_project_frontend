import React from 'react';
import styled from 'styled-components';

type LadderProps = {
  rows: number;
  columns: number;
  ladder: boolean[][];
};

// 수직선 + 가로선 포함한 칸 수
const Grid = styled.div<{ columns: number; rows: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns * 2 - 1}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 30px);
  gap: 0px;
  margin: 0px 0;
`;

const Vertical = styled.div`
  background-color: #aaa;
  width: 4px;
  margin: 0 auto;
`;

const Horizontal = styled.div`
  background-color: #2979ff;
  height: 4px;
  width: 280px;         /* 부모 셀 크기만큼만 */
  align-self: center;  /* 세로 중앙 정렬 */
  justify-self: center;
`;

const Empty = styled.div``;

const LadderRenderer: React.FC<LadderProps> = ({ rows, columns, ladder }) => {
  const renderGrid = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns * 2 - 1; c++) {
      // 세로줄 위치
      if (c % 2 === 0) {
        renderGrid.push(<Vertical key={`v-${r}-${c}`} />);
      }
      // 가로줄 위치
      else {
        const leftIndex = Math.floor(c / 2);
        if (ladder[r][leftIndex]) {
          renderGrid.push(<Horizontal key={`h-${r}-${c}`} />);
        } else {
          renderGrid.push(<Empty key={`e-${r}-${c}`} />);
        }
      }
    }
  }

  return <Grid rows={rows} columns={columns}>{renderGrid}</Grid>;
};

export default LadderRenderer;
