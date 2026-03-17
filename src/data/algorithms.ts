import type { ReactNode } from 'react';

import { COAlgorithms } from '@/data/COAlgorithms';
import { CPAlgorithms } from '@/data/CPAlgorithms';
import { CSAlgorithms } from '@/data/CSAlgorithms';
import { CSPAlgorithms } from '@/data/CSPAlgorithms';
import { EOAlgorithms } from '@/data/EOAlgorithms';
import { EPAlgorithms } from '@/data/EPAlgorithms';
import { OBLAlgorithms } from '@/data/OBLAlgorithms';
import { ParityAlgorithms } from '@/data/ParityAlgorithms';

export type Algorithm = {
  topSide: ReactNode;
  bottomSide: ReactNode;
  algorithm: string;
  algorithmName: string;
};

export const ALGORITHMS = new Map<string, Algorithm[]>([
  ['cs', CSAlgorithms],
  ['co', COAlgorithms],
  ['eo', EOAlgorithms],
  ['obl', OBLAlgorithms],
  ['cp', CPAlgorithms],
  ['ep', EPAlgorithms],
  ['parity', ParityAlgorithms],
  ['csp', CSPAlgorithms]
]);
