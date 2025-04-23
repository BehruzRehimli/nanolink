import { useState } from "react"
import FilterWeb from "./FilterWeb"
import ResultTableWeb from "./ResultTableWeb"

export interface Filter{
    gender: "MAG" | "WAG",
    step: "Qualification" | "Final",
    type: "Apparatus" | "Team" | "All-around",
    level: "Seniors" | "Juniors",
    branch: "Vault" | "Floor Exercise" | "Pommel Horse" | "Rings" | "Paralel Bars" | "Horizontal Bar",
} 

const Result = () => {
    const [filter,setFilter]= useState<Filter>({
        gender: "MAG",
        step: "Qualification",
        type: "Apparatus",
        level:"Seniors",
        branch:"Vault"
    })

  return (
    <>
        <FilterWeb filter={filter} setFilter={setFilter}/>
        <ResultTableWeb filter={filter}/>
    </>
  )
}

export default Result