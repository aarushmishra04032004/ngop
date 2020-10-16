import { h } from 'preact';
import styles from './card.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
import BusinessIcon from '../../assets/icons/mdi_business.svg';
import InfoIcon from '../../assets/icons/mdi_info.svg';

const Card = ({ name, address, description }) => (
	<div class={styles.card}>
		<h1 class={styles.card__heading}>{name}</h1>
		<div class={styles['card__detail']}>
			<BusinessIcon />

			<h4 class={styles['card__detail-text']}>{address}</h4>
		</div>
		<div
			class={styles['card__detail']}
			style={{ alignItems: 'flex-start' }}
		>
			<InfoIcon />

			<h4 class={styles['card__detail-text']}>{description}</h4>
		</div>
	</div>
);

export default Card;
