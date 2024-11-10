module.exports = async (req, res) => {
    const { method } = req;

    if (method === 'GET') {
        // 从服务器读取数据
        const data = {}; // 这里应该是从数据库或其他持久化存储中读取数据
        res.status(200).json(data);
    } else if (method === 'POST') {
        // 保存数据到服务器
        const { data } = req.body;
        // 这里应该是将数据保存到数据库或其他持久化存储中
        res.status(200).json({ message: 'Data saved successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};