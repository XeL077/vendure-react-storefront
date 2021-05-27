import React from "react";
import {
    useParams
  } from "react-router-dom";

interface IParamsProductsRouter {
    categoryName: string
}

export function Products () {
    let {categoryName} : IParamsProductsRouter = useParams();

        return (
            <div>
                Product $ {categoryName}
            </div>
        )
}
