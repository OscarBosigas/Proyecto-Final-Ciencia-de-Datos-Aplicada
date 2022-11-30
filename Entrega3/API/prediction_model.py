from joblib import load
from sklearn.preprocessing import PowerTransformer

class PredictionModel:

    def __init__(self):
        self.model = load("models/RF.joblib")
        self.pt = load("models/pt.joblib")

    def make_predictions(self, data):
        result = self.model.predict(data)
        result = (self.pt.inverse_transform(result.reshape(-1, 1)))
        return result
