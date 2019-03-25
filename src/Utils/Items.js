import _ from 'underscore';

export function getAllItems() {
	return [
		{
			id: _.uniqueId('itemId'),
			text: 'Option'
		}
	]
}

export function findItemIndexByItemId(items, itemId){
	let foundIndex;
	items && items.forEach(function(item, index) {
		if(item.id === itemId){
			foundIndex = index
		}
	});
	return foundIndex;
}

export function addToList(list, data){
	const newId = _.uniqueId('itemId');
	const item = {
		id: newId,
		text: data.text || `Option ${list.length+1}`
	};
	return list.concat([item]);
}

export function deleteFromList(list, itemId){
	const itemIndex = findItemIndexByItemId(list, itemId);
	if(itemIndex > -1) {
		list.splice(itemIndex, 1)
	}
	return list;
}