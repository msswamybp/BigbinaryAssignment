import Api from "@api";
import ApiConstants from "../ApiConstants";

export default function Gecode(props) {
  
    return Api(
        ApiConstants.GEOCODE_API + props,
        null,
        "get",
        null,
        props
    );
}