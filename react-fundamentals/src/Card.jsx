export default function Card({ title, description, color }) {
    return (
        <div style={{border: `2px solid ${color}`, padding: '10px', margin: '10px'}}>
            <h3 style={{color: color}}>{title}</h3>
            <p>{description}</p>
        </div>
    )
}