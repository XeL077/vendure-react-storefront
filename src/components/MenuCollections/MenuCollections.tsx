import { useQuery } from '@apollo/react-hooks';
import {GET_COLLECTIONS} from "../../providers/graphql/documents.graphql";
import "./MenuCollections.css";


export function MenuCollections () {
        
        const { data, loading } = useQuery(GET_COLLECTIONS);
        if(!data) {
          return null;
        }

        return (
            <menu className="menu-collections">
                {
                  data.collections?.items.map((item: any) => {
                    return <a href={`/category/${item.slug}`} className="menu-item">{item.name}</a>
                  })
                }
            </menu>
        );
}