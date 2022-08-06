import { TbSend } from 'react-icons/tb';
import '../styles/componentStyles.css';

const Header = () => {
	return (
		<header>
			<TbSend className="icon send-icon" />
			<h1>CV Generator</h1>
		</header>
	);
};

export default Header;
