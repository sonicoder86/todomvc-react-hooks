import { withDispatch, withStateAndDispatch } from './factory';
import { App } from '../components/App';
import { List } from '../components/List';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const AppContainer = withStateAndDispatch(App);
export const HeaderContainer = withDispatch(Header);
export const ListContainer = withDispatch(List);
export const FooterContainer = withDispatch(Footer);
