import React from "react"
import Tab from "./Tab"
import Header from "./Header"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return (
            <Tab
                key = {item.title}
                title = {item.title}
                location = {item.location}
                url = {item.url}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
            />
        )
    }     
    )
    return(
        <div>
        <Header/>
        <section className = "tabList">
        {cards}
        </section>
        </div>
        
    )
}