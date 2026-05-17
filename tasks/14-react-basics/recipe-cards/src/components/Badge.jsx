function Badge({ text, icon }) {
    return (
        <span className="badge">
            {icon && <span>{icon}</span>}
            {text}
        </span>
    );
}

export default Badge;
