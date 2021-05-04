import Api from "@api";
import ApiConstants from "../ApiConstants";

export default function revercGeoCode(props) {
    return Api(
        ApiConstants.BIG_DATA + props,
        null,
        "get",
        null,
        props
    );
}