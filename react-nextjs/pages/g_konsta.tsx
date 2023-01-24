import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";

export default function () {
    return(<>
        <App theme="ios">
            <Page>
                <Navbar title="List">
                    <BlockTitle>Links, Header, Footer</BlockTitle>
                    <List strongIos outlineIos>
                        <ListItem link header="Name" title="John Doe" after="Edit"/>
                    </List>
                </Navbar>
            </Page>
        </App>
    </>)
}