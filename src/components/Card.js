export const Card = ({burger}) =>{
    return (
    <div className="card">
        
        <h2 className="bread">{burger.name}</h2>
        
        <h5 className="lettuce">{burger.description}</h5>
        <p className="meat">{burger.location.address}</p>
        <p className="cheese">{burger.location.web}</p>
    
        <div className="bread bread2">
            <p className="rotation">
                {burger.location.zipcode}
            </p>
        </div>
        {burger.visited && <div className="visited"></div>}
        {!burger.visited && <div className="not-visited"></div>}        
    </div>)
}