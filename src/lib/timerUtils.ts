import { randomChoice } from '@/utils/functions';

type blockType = 1 | 2;

type turn = {
  turnValue: number;
  turnIndex: number;
};

type turnReturn = {
  topTurn: turn;
  bottomTurn: turn;
};

function canSlash(side: blockType[]): number {
  let curSum = 0;
  for (let i = 0; i < side.length && curSum < 6; i++) {
    curSum += side[i];
    if (curSum === 6) return i + 1;
  }
  return -1;
}

function getSideAllRotateVariants(side: blockType[]): turn[] {
  const validVariants: turn[] = [{ turnValue: 0, turnIndex: 0 }];
  let varToAdd = 0;
  for (let i = 1; i < side.length; i++) {
    varToAdd += side[i - 1];
    if (canSlash([...side.slice(i), ...side.slice(0, i)]) !== -1)
      validVariants.push({ turnValue: varToAdd <= 6 ? varToAdd : -12 + varToAdd, turnIndex: i });
  }
  return validVariants;
}

function genOneTurn(topSideValidTurns: turn[], bottomSideValidTurns: turn[]): turnReturn {
  let topRandChoice: turn = randomChoice(topSideValidTurns);
  let bottomRandChoice: turn = randomChoice(bottomSideValidTurns);

  if (
    (topRandChoice.turnValue === 0 && bottomRandChoice.turnValue === 0) ||
    (topRandChoice.turnValue === 6 && bottomRandChoice.turnValue === 6)
  ) {
    const topMiddle = topSideValidTurns.slice(1, -1);
    const bottomMiddle = bottomSideValidTurns.slice(1, -1);
    if (topMiddle.length > 0 && Math.random() <= 0.5) topRandChoice = randomChoice(topMiddle);
    else if (bottomMiddle.length > 0) bottomRandChoice = randomChoice(bottomMiddle);
  }

  return {
    topTurn: topRandChoice,
    bottomTurn: bottomRandChoice
  };
}

export function genScramble(): string {
  let bottomSide: blockType[] = [2, 1, 2, 1, 2, 1, 2, 1];
  let topSide: blockType[] = [1, 2, 1, 2, 1, 2, 1, 2];
  let scramble: string = '';

  const scrambleTurnsCount: number = randomChoice([10, 11, 12, 13, 14]);

  for (let i = 0; i < scrambleTurnsCount; i++) {
    const topValidTurns: turn[] = getSideAllRotateVariants(topSide);
    const bottomValidTurns: turn[] = getSideAllRotateVariants(bottomSide);
    const oneTurn: turnReturn = genOneTurn(topValidTurns, bottomValidTurns);

    scramble += `(${oneTurn.topTurn.turnValue}, ${oneTurn.bottomTurn.turnValue}) / `;

    topSide = [...topSide.slice(oneTurn.topTurn.turnIndex), ...topSide.slice(0, oneTurn.topTurn.turnIndex)];
    bottomSide = [
      ...bottomSide.slice(oneTurn.bottomTurn.turnIndex),
      ...bottomSide.slice(0, oneTurn.bottomTurn.turnIndex)
    ];

    const topSplit = canSlash(topSide);
    const bottomSplit = canSlash(bottomSide);
    const newTop = [...bottomSide.slice(0, bottomSplit), ...topSide.slice(topSplit)];
    const newBottom = [...topSide.slice(0, topSplit), ...bottomSide.slice(bottomSplit)];
    topSide = newTop;
    bottomSide = newBottom;
  }

  return Math.random() > 0.7 ? scramble : scramble.slice(0, -3);
}
