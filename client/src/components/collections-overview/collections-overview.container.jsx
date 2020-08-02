import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverView from "./collections-overview.component";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const ColllectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverView);

export default ColllectionOverviewContainer;
