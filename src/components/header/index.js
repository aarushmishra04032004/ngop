import { h } from 'preact';
// import { Link } from 'preact-router/match';
import styles from './style.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Header = () => (
	<header class={styles.header}>
		<h1 class={cx(styles.header__heading)}>Project Name</h1>
		<h2 class={cx(styles['header__sub-heading'])}>
			A repository for finding information about NGOs
		</h2>
	</header>
);

export default Header;
