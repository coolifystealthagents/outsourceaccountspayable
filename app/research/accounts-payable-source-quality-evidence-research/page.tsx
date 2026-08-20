import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('research','accounts-payable-source-quality-evidence-research');
export default function Page(){return renderAug19Article('research','accounts-payable-source-quality-evidence-research')}
