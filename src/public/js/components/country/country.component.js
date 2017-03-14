import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {setCountry, getCountries} from "../../actions/country";
import sortBy from "lodash/sortBy";

class CountryComponent extends React.Component {

  constructor (props) {
    super (props);

    this.setCountry = this.setCountry.bind(this);
  }

  componentDidMount () {
    this.props.getCountries().then(() => {
            //console.log(this.props.country.countries);
    });
  }

  setCountry (country, countryCode, language, languageCode) {
        
    localStorage.setItem("country", JSON.stringify({
      country: country,
      countryCode: countryCode,
      language: language,
      languageCode: languageCode
    }));

    this.props.setCountry({
      country: country,
      countryCode: countryCode,
      language: language,
      languageCode: languageCode
    });
  }

  drawCountriesList () {

    const drawCountryItem = (country, key) => {

      let itemView;

      if (Array.isArray(country.languages)) {

        let langView = <span> (<span onClick={() => {return this.setCountry(country.country, country.countryCode, country.languages[0].language, country.languages[0].code)}}>{ country.languages[0].language }</span> | <span onClick={() => {return this.setCountry(country.country, country.countryCode, country.languages[1].language, country.languages[1].code)}}>{ country.languages[1].language }</span>)</span>;

        itemView = <li className="country-item has-langs" key={key}>{country.country} {langView}</li>;
      } else {
        itemView = <li onClick={() => {return this.setCountry(country.country, country.countryCode, country.languages.language, country.languages.code)}} className="country-item" key={key}>{country.country}</li>;
      }

      return itemView;
    };

    const countries = sortBy(this.props.country.countries, 'country');

    let ul = [];
    for (let i = 0; i < countries.length; i++) {
      ul.push(drawCountryItem(countries[i], i));
    }

    return <ul className="countries-list">{ ul }</ul>;
  }

  render () {
    return (
            <div id="country" className="bg-grey">
                <h2 className="country-title"><i className="fa fa-globe" /> Choose country</h2>

                { this.props.country.countries.length > 0 ? this.drawCountriesList() : null }

                <div className="wrp-btn-cancel">
                    <Link to="/" className="btn btn-white">CANCEL</Link>
                </div>

            </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    country: state.country
  }
};

export default connect(mapStateToProps, {setCountry, getCountries})(CountryComponent);