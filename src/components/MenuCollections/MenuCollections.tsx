import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import {GET_COLLECTIONS} from "../../providers/graphql/documents.graphql";
import "./MenuCollections.css";


export function MenuCollections () {
    const { data } = useQuery(GET_COLLECTIONS);
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
