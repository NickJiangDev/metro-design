import * as React from 'react';
import { ReactComponent as Icon } from './chart-pie-off.svg';
import createIcon from '../create-icon';

import loadable from '@loadable/component';
const LightIcon = loadable(() => import(`../light-chart-pie-off`));

const ChartPieOff = createIcon([Icon, LightIcon]);
export default React.memo(ChartPieOff);
