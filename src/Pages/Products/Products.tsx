import * as React from "react";
import {
    useParams
  } from "react-router-dom";
import {useSearchProductsQuery} from "../../generated/hooks";
import {ProductCard} from "./ProductCard";
import {CollectionBreadcrumbs} from "../../components/CollectionBreadcrumbs/CollectionBreadcrumbs";

export function Products () {
    // const param: {categoryName: string} = useParams();

    const {data} = useSearchProductsQuery({
        variables: {
            input: {
                // collectionSlug: param.categoryName
                "term": "",
                "groupByProduct": true,
                "collectionId": "2",
                "facetValueIds": [],
                "take": 24,
                "skip": 0
            },
        }
    });

    if(!data) return null;

    return (
        <div className="procuct">
            <CollectionBreadcrumbs />

            <div className="product-list">

                { data.search.items.length === 0 && <div>Пусто</div> }

                {
                    data.search.items.map(item => {
                        // @ts-ignore
                        return <ProductCard key={item.productId} item={item} />
                    })
                }
            </div>
        </div>
    )
}
