import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    changeSearchInput,
    searchInput,
    clearFilters,
    enterSearchInput,
  } = props

  const renderRatingsFiltersList = () =>
    ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? 'active-rating' : ''

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={`and-up ${ratingClassName}`}>& up</p>
        </li>
      )
    })

  const renderCategoriesList = () =>
    categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props

      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive ? 'active-category-name' : ''

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={`category-name ${categoryClassName}`}>
            {category.name}
          </p>
        </li>
      )
    })

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => changeSearchInput(event.target.value)

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>
      <div>
        <h1 className="category-heading">Category</h1>
        <ul className="categories-list">{renderCategoriesList()}</ul>
      </div>
      <div>
        <h1 className="rating-heading">Rating</h1>
        <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
      </div>
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
