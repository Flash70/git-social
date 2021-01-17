import Newsfeed from "./Newsfeed";
import {connect} from "react-redux";


// const NewsfeedContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState()
//
//             return <Newsfeed state={state} store={store} />
//             }
//         }
//             </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const NewsfeedContainer = connect(mapStateToProps,mapDispatchToProps)(Newsfeed)

export default NewsfeedContainer;