/* eslint-disable react/no-unknown-property */
import './index.css'

const HistoryItem = props => {
  const {history, deleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="search-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-items">
        <div className="logo-name">
          <img src={logoUrl} alt="domain logo" className="icon" />
          <div className="websites">
            <p className="website">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <button type="button" testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
