#!flask/bin/python
from flask import Flask, jsonify
from flask import request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

rooms = [
    { 'id':0,
      'local':'cocina',
      'estado': False,
      'description': 'focos bajo consumo con control de iluminacion', 
      'done': False,
      'cantidad': '2'},
    { 'id':1,
      'local':'banio',
      'estado': False,
      'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
      'done': False,
      'cantidad': '2'},
    { 'id':2,
      'local':'dormitorio1',
      'estado': False,
      'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
      'done': False,
      'cantidad': '2'},
    { 'id':3,
      'local':'patio',
      'estado': False,
      'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
      'done': False,
      'cantidad': '2'},
    { 'id':4,
      'local':'garage',
      'estado': False,
      'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
      'done': False,
      'cantidad': '2'}
]

@app.route('/todo/api/v1.0/rooms', methods=['GET'])
def get_rooms():
    #return jsonify({'rooms': rooms})
    return jsonify(rooms)

@app.route('/todo/api/v1.0/rooms/<int:room_id>', methods=['GET'])
def get_room(room_id):
    room = [room for room in rooms if room['id'] == room_id]
    if len(room) == 0:
        abort(404)
    return jsonify(room[0])

@app.route('/todo/api/v1.0/rooms', methods=['POST'])
def create_room():
    if not request.json or not 'local' in request.json:
        abort(400)
    room = {
        'id': rooms[-1]['id'] + 1,
        'local': request.json['local'],
        'description': request.json.get('description', ""),
        'done': False,
        'cantidad':request.json['cantidad'],
    }
    rooms.append(room)
    return jsonify({'room': room}), 201

@app.route('/todo/api/v1.0/rooms/<int:room_id>', methods=['DELETE'])
def delete_room(room_id):
    room = [room for room in rooms if room['id'] == room_id]
    if len(room) == 0:
        abort(404)
    rooms.remove(room[0])
    return jsonify({'result': True})

if __name__ == '__main__':
    app.run(debug=True)
