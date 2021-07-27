import {NavLink, useParams} from "react-router-dom";
import {useGetCollectionQuery} from "../../generated/hooks";
import * as React from "react";

export function CollectionBreadcrumbs() {
    const param: {categoryName: string} = useParams();

    const { data } = useGetCollectionQuery({ variables: {
        slug: param.categoryName!,
        }
    });

    if(!data?.collection?.breadcrumbs) {
        return null;
    }

    const { breadcrumbs } = data.collection;

    let breadcrumbsData = breadcrumbs ? breadcrumbs.slice(1) : [];

    let breadcrumbsList = [
            {
                id: '',
                name: 'Home',
                slug: '/',
            },
            {
                id: '',
                name: 'category',
                slug: '/category',
            }
        ];

    breadcrumbsList = breadcrumbsList.concat(breadcrumbsData);

    return (
        <nav>
        {
            breadcrumbsList.map((currentValue, index, arr) => (
                <span key={currentValue.slug}>
                    {
                        index < arr.length-1 ? <NavLink to={`${currentValue.slug}`}>{currentValue.name}</NavLink>
                            : <span>{currentValue.name}</span>
                    }
                </span>
            ))
        }
        </nav>
    );
}
