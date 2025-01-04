import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
	quantity: { type: Number, default: 0},
    description: { type: String },
    _destroy: {type: Boolean,default: false}
	}, 
	{
		timestamps: true,
		versionKey: false,
		autoCreate: true
	});

productSchema.index({ code: 1 }, { unique: true, partialFilterExpression: { _destroy: { $eq: false } } })
const Product = mongoose.model('Products', productSchema);

export default Product