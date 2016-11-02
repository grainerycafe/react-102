import React from 'react';

export const WineList = React.createClass({
  onSelectWine(e, wineId) {
    e.preventDefault();
    this.props.onSelectWine(wineId);
  },
  render() {
    if (this.props.region === null) {
      return null;
    }
    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Wines</h2>
        <div className="collection">
          {this.props.wines.map(wine =>
            <a key={wine.id}
              href="#!"
              onClick={e => this.onSelectWine(e, wine.id)}
              className={['collection-item', wine.id === this.props.wine.id ? 'active' : ''].join(' ')}>
                {wine.name}
            </a>
          )}
        </div>
      </div>
    );
  }
});