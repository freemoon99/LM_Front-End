import '../styles/components/Footer.css';

const Footer = () => {

    const version = "v.0.0.0";
    const teamName = "규환이와 아이들";

    return(
        <div className="Footer">
            <div className="Footer-info">
                <div className="Footer-info-version">{version}</div>
                <div className="Footer-info-teamName">{teamName}</div>
            </div>
        </div>
    );
}

export default Footer;