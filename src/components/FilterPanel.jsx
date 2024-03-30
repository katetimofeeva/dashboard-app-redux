import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'store/filters/filter-selector';
import { removeFilter,removeAllFilters } from 'store/filters/filter-actions';

const FilterPanel = () => {
  const filters = useSelector(selectFilter)
  const dispatch = useDispatch()
  
  // if (!filters.length) { return null }
  
  const handelRemove = (filter) => {
    dispatch(removeFilter(filter))
  }

  const handleClearAll = () => {
    dispatch(removeAllFilters)
  }
  
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {!filters.length
            ? <p>Choose filter</p>
            :filters.map(filter => {
            return (
              <Badge
                variant="clearable"
                key={filter}
                onClear={() => handelRemove(filter)}
              >{filter}</Badge>)
          })}
        </Stack>

        <button className='link' onClick={handleClearAll}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};