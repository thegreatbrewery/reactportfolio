export default function ServiceBox(props) {
    return (
        <div className="services-box">
            <i className={props.icon}></i>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}