import Newsfeed from "./Newsfeed";
import {connect} from "react-redux";


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