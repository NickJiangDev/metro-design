import * as React from 'react';
import { ReactComponent as Icon } from './project-lab-on.svg';
import createIcon from '../create-icon';

import loadable from '@loadable/component';
const LightIcon = loadable(() => import(`../light-project-lab-on`));

const ProjectLabOn = createIcon([Icon, LightIcon]);
export default React.memo(ProjectLabOn);
