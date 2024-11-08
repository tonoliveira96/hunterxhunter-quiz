import { NenTypeEnum } from '../types/enums';

const nenTypeName = {
  [NenTypeEnum.ENHANCEMENT]: 'Reforço',
  [NenTypeEnum.TRANSMUTATION]: 'Transformação',
  [NenTypeEnum.CONJURATION]: 'Materialização',
  [NenTypeEnum.MANIPULATION]: 'Manipulação',
  [NenTypeEnum.EMISSION]: 'Emissão',
  [NenTypeEnum.SPECIALIZATION]: 'Especialização'
};

export function getNenTypeName(nenType: NenTypeEnum) {
  return nenTypeName[nenType];
}