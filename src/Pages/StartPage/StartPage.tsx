import React from "react";
import { StartPageCarusel } from "../../components/StartPageCarusel/StartPageCarusel";
import { IslandOfLinks, LinkItem } from "../../components/IslandOfLinks/IslandOfLinks";
import { InstagrammBanner } from "../../components/InstagrammBanner/InstagrammBanner";

export class StartPage extends React.Component {
    render () {
        return (
            <div>
                <StartPageCarusel />
                <IslandOfLinks>
                    <LinkItem 
                    subheader={"Scarves"}
                    header={"COCKTAIL & PARTY"}
                    >
                        <p>
                            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                        </p>

                        <a href="/products">Shop Now</a>
                    </LinkItem>

                    <LinkItem 
                    subheader={"Dresses"}
                    header={"Linen Dresses"}
                    isWide={true}
                    >
                        <p>
                        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                        </p>
                    </LinkItem>

                    <LinkItem 
                    subheader={"D"}
                    header={"Linen Dresses"}
                    // isWide={true}
                    halfBanner={true}>
                        <a href="/products">Shop Now</a>
                    </LinkItem>

                    <LinkItem 
                    subheader={"jalf test"}
                    header={"Linen Dresses"}
                    halfBanner={true}>
                        <a href="/products">Shop Now</a>
                    </LinkItem>
                </IslandOfLinks>
                <InstagrammBanner />
            </div>
        );
    }
}