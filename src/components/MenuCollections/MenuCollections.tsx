import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetCollectionsQuery} from "../../generated/hooks";
import "./MenuCollections.css";

export function MenuCollections () {
    const{ data } = useGetCollectionsQuery();

    if(!data) {
      return null;
    }

    return (
      <menu className="menu-collections">
        {
          data.collections?.items.map((item: any) => {
            return <NavLink 
                    to={`/category/${item.slug}`} key={item.id}
                    activeClassName="menu-item_selected" className="menu-item"
                    >{item.name}</NavLink>
          })
        }
      </menu>
    );
}
