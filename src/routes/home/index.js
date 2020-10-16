import { h } from 'preact';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
import Card from '../../components/card/card';
import styles from './style.css';

const Home = () => (
	<div class={styles.home}>
		<Card
			name="Food Warriors"
			address="Sector-30, Noida"
			description="Our motive is to educate children of poor people"
		/>
	</div>
);

export default Home;
