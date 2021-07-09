# MongoDB Realm

Here is the code on MongoDB Realm which acts as the api:

```javascript
exports = function (payload) {
  const mongodb = context.services.get('mongodb-atlas');
  const mycollection = mongodb.db('gigs').collection('2021');
  return mycollection
    .find(
      { date: { $gte: new Date() }, public: true },
      { date: 1, bandname: 1, venuename: 1, city: 1, link: 1, bandlink: 1 }
    )
    .sort({ date: 1 })
    .toArray();
};
```
