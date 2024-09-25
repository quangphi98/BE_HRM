import Payroll from '../models/Payroll.js';

export const createPayroll = async (req, res, next) => {
    const payroll = new Payroll(req.body)
    try{
        await payroll.save();
        res.status(200).send("Tạo bảng lương thành công")
    }
    catch(err){
        next(err);
    }
}

export const updatePayroll = async (req, res, next) => {
    try{
        await Payroll.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).send("Chỉnh sửa thành công");
    }
    catch(err){
        next(err);
    }
}

export const deletePayroll = async (req, res, next) => {
    try{
        await Payroll.findByIdAndDelete(req.params.id);
        res.status(200).send("Xóa bảng lương thành công");
    }
    catch(err){
        next(err);
    }
}

export const getAllPayroll = async (req, res, next) => {
    try{
        const allPayroll = await Payroll.find();
        res.status(200).json(allPayroll);
    }
    catch(err){
        next(err);
    }
}

export const getPayroll = async (req, res, next) => {
    try{
        const payroll = await Payroll.findById(req.params.id);
        res.status(200).json(payroll);
    }
    catch(err){
        next(err);
    }
}

export const getPayrollByIdUser = async (req, res, next) => {
    try{
        const payroll = await Payroll.find({employee_id: req.params.id});
        res.status(200).json(payroll);
    }
    catch(err){
        next(err);
    }
}