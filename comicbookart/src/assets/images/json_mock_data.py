import json

class MongoImageModel():
        parent_dir = 'comics'
        ext = 'png'

class ImageModel(MongoImageModel):
    def __init__(self, names):
        self.names = names

    def get_names_from_range(self, max_num=10, start_num=0):
        return [f'{self.parent_dir}/{str(n)}.{self.ext}' for n in range(start_num, max_num)]

    def data_to_fields(self, all_files= , field_name="image_path"):
        data_list = []
        for each in all_files:
            row = {self.field: each}
            data_list.append(row)

        return data_list

    def convert_to_json(self):
        data = self.data_to_fields()
        json_data = json.dumps(data)
        return json_data
