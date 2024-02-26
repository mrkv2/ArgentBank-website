// Correction de la faute de frappe dans le chemin d'importation
import Button from "../Button/Button";

// Ajout des props `title`, `amount`, et `description`
export default function Account({ title, amount, description }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button className="transaction-button">View transactions</Button>
            </div>
        </section>
    );
}
