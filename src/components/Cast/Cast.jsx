import React, { Component } from 'react';
import { getCast, getImagePath } from 'components/api/fetchFunctions';

class Cast extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {
    const baseProfilePath = `${(await getImagePath()).base_url}${(
      await getImagePath()
    ).profile_sizes.find(sizes => sizes === 'w185')}`;
    const cast = await getCast(this.props.match.params.movieId);
    cast.map(element => {
      return (element.profile_path = `${baseProfilePath}${element.profile_path}`);
    });

    this.setState({ casts: cast.filter(item => item.popularity > 7) });
  }

  render() {
    return (
      <>
        <h2>Cast</h2>
        <ul className="castList">
          {this.state.casts.map((item, index) => (
            <li key={index} className="castItem">
              <div className="castBox">
                <img src={item.profile_path} alt={`${item.original_name}`} />
                <h4>Name: {item.original_name}</h4>
                <p>Character: {item.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
