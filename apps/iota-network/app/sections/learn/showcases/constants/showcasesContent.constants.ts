import { ShowcaseProject } from '../showcasesProjects.enums';
import { ShowcasePage } from '../types';
import { SHOWCASE_EBSI } from './ebsi';
import { SHOWCASE_IMPIERCE } from './impierce';
import { SHOWCASE_OBJECT_ID } from './objectID';
import { SHOWCASE_OROBO } from './orobo';
import { SHOWCASE_SALUS } from './salus';
import { SHOWCASE_TURING_SPACE } from './turing-space';
import { SHOWCASE_DPP } from './dpp';
import { SHOWCASE_TWIN } from './twin';
import { SHOWCASE_KYC } from './kyc';
import { SHOWCASE_IPRM } from './iprm';
import { SHOWCASE_MULTIKNIP } from './multiknip';
import { SHOWCASE_REALIZE } from './realize';
// import { SHOWCASE_EXTRIMIAN } from './extrimian';
// import { SHOWCASE_KALALOHKO } from './kalalohko';
import { SHOWCASE_POOLS } from './pools';
import { SHOWCASE_VIRTUE } from './virtue';

export const SHOWCASES: Record<ShowcaseProject, ShowcasePage> = {
    [ShowcaseProject.Virtue]: SHOWCASE_VIRTUE,
    [ShowcaseProject.PoolsFinance]: SHOWCASE_POOLS,
    [ShowcaseProject.Twin]: SHOWCASE_TWIN,
    [ShowcaseProject.Salus]: SHOWCASE_SALUS,
    [ShowcaseProject.Impierce]: SHOWCASE_IMPIERCE,
    [ShowcaseProject.Orobo]: SHOWCASE_OROBO,
    [ShowcaseProject.ObjectID]: SHOWCASE_OBJECT_ID,
    [ShowcaseProject.TuringSpace]: SHOWCASE_TURING_SPACE,
    [ShowcaseProject.Ebsi]: SHOWCASE_EBSI,
    [ShowcaseProject.Kyc]: SHOWCASE_KYC,
    [ShowcaseProject.Iprm]: SHOWCASE_IPRM,
    [ShowcaseProject.DPP]: SHOWCASE_DPP,
    [ShowcaseProject.Multiknip]: SHOWCASE_MULTIKNIP,
    [ShowcaseProject.Realize]: SHOWCASE_REALIZE,
    // [ShowcaseProject.Kalalohko]: SHOWCASE_KALALOHKO,
    // [ShowcaseProject.Extrimian]: SHOWCASE_EXTRIMIAN,
};
