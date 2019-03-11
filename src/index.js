import './styles/reset';
import './styles/app';

import _ from 'lodash';
window._ = _;

import Game from './game';
new Game().start();