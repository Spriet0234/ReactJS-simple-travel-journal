export default function Tab(props){
    console.log(props.startDate)
    return(
        <div className ="tab">
            <img src={`${props.imageUrl}`}  className = "image" />
            <h1 className = "tab-title"> {props.title} </h1>
            <img src="https://st3.depositphotos.com/1032749/19203/v/450/depositphotos_192035760-stock-illustration-red-location-pin-icon-isolated.jpg" className = "red"/>
            <h1 className = "tab-location"> {props.location} </h1>
            <a href = {`${props.url}`} className = "tab-map-url"> View On Google Maps </a>
            <h1 className = "tab-date"> {`${props.startDate} - ${props.endDate}`} </h1>
            <p className = "tab-text"> {props.description} </p>
        </div>
    )
}